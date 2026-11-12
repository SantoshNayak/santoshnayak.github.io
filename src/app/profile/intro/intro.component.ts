import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

interface Point {
  x: number;
  y: number;
}

const ULTRA = '#1a2bc4';
const PAPER = '#eef0f7';
const VERMILION = '#ff4b1f';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stage', { static: true }) stageRef: ElementRef<HTMLElement>;
  @ViewChild('scene', { static: true }) sceneRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('physicsLabel', { static: true }) physicsRef: ElementRef<HTMLElement>;
  @ViewChild('codeLabel', { static: true }) codeRef: ElementRef<HTMLElement>;

  roles = [
    'Software Engineer Master',
    'Generative AI Builder',
    'Full-Stack Developer',
    'SaaS Product Creator'
  ];
  currentRole = '';

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;

  private reduced = false;
  private inView = true;
  private raf = 0;
  private startTime = 0;
  private width = 0;
  private height = 0;
  private dpr = 1;

  // Source positions in 0..1 of the scene. Physics is fixed; Code follows the pointer.
  private narrow = typeof window !== 'undefined' && window.innerWidth < 600;
  private physics: Point = this.narrow ? { x: 0.3, y: 0.3 } : { x: 0.27, y: 0.46 };
  private code: Point = this.narrow ? { x: 0.7, y: 0.62 } : { x: 0.72, y: 0.52 };
  private codeTarget: Point = { ...this.code };

  private resizeObserver: ResizeObserver;
  private intersectionObserver: IntersectionObserver;
  private onPointer = (e: PointerEvent) => this.movePointer(e);
  private onVisibility = () => this.syncLoop();

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    this.reduced = typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.reduced) {
      this.currentRole = this.roles[0];
    } else {
      this.typeEffect();
    }

    this.zone.runOutsideAngular(() => {
      const stage = this.stageRef.nativeElement;
      stage.addEventListener('pointermove', this.onPointer);
      stage.addEventListener('pointerdown', this.onPointer);
      document.addEventListener('visibilitychange', this.onVisibility);

      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(stage);

      this.intersectionObserver = new IntersectionObserver(entries => {
        this.inView = entries[0].isIntersecting;
        this.syncLoop();
      });
      this.intersectionObserver.observe(stage);

      this.resize();
    });
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.stageRef.nativeElement.removeEventListener('pointermove', this.onPointer);
    this.stageRef.nativeElement.removeEventListener('pointerdown', this.onPointer);
    document.removeEventListener('visibilitychange', this.onVisibility);
    if (this.resizeObserver) { this.resizeObserver.disconnect(); }
    if (this.intersectionObserver) { this.intersectionObserver.disconnect(); }
  }

  // ----- role typing -----
  private typeEffect() {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = 100;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    this.typeTimer = setTimeout(() => this.typeEffect(), typeSpeed);
  }

  // ----- ripple tank -----
  private resize() {
    const canvas = this.sceneRef.nativeElement;
    const rect = this.stageRef.nativeElement.getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = Math.max(1, Math.round(rect.width));
    this.height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(this.width * this.dpr);
    canvas.height = Math.round(this.height * this.dpr);
    this.draw(this.reduced ? 0 : (performance.now() - this.startTime) / 1000);
    this.syncLoop();
  }

  private movePointer(e: PointerEvent) {
    const rect = this.stageRef.nativeElement.getBoundingClientRect();
    this.codeTarget = {
      x: Math.min(0.94, Math.max(0.06, (e.clientX - rect.left) / rect.width)),
      y: Math.min(0.92, Math.max(0.08, (e.clientY - rect.top) / rect.height))
    };
    if (this.reduced) {
      this.code = { ...this.codeTarget };
      this.draw(0);
    }
  }

  private syncLoop() {
    const shouldRun = !this.reduced && this.inView && !document.hidden;
    if (shouldRun && !this.raf) {
      if (!this.startTime) { this.startTime = performance.now(); }
      this.raf = requestAnimationFrame(this.frame);
    } else if (!shouldRun && this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    }
  }

  private frame = (now: number) => {
    this.code.x += (this.codeTarget.x - this.code.x) * 0.07;
    this.code.y += (this.codeTarget.y - this.code.y) * 0.07;
    this.draw((now - this.startTime) / 1000);
    this.raf = requestAnimationFrame(this.frame);
  }

  private draw(t: number) {
    const canvas = this.sceneRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) { return; }
    const { width, height, dpr } = this;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = ULTRA;
    ctx.fillRect(0, 0, width, height);

    const lambda = Math.min(34, Math.max(width < 600 ? 28 : 20, width / 46));
    const reach = Math.hypot(width, height);
    const phase = (t * lambda * 0.38) % lambda;

    const p1 = { x: this.physics.x * width, y: this.physics.y * height };
    const p2 = { x: this.code.x * width, y: this.code.y * height };

    this.rings(ctx, p1, PAPER, 1.4, phase, lambda, reach);
    this.rings(ctx, p2, VERMILION, 2.4, phase, lambda, reach);

    // The sources themselves.
    ctx.fillStyle = PAPER;
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = VERMILION;
    ctx.beginPath();
    ctx.arc(p2.x, p2.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = PAPER;
    ctx.lineWidth = 2;
    ctx.stroke();

    this.placeLabel(this.physicsRef.nativeElement, p1);
    this.placeLabel(this.codeRef.nativeElement, p2);
  }

  private rings(ctx: CanvasRenderingContext2D, c: Point, color: string, lineWidth: number,
                phase: number, lambda: number, reach: number) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    for (let r = phase + lambda * 0.5; r < reach; r += lambda) {
      ctx.globalAlpha = Math.max(0.16, 1 - r / (reach * 0.85));
      ctx.beginPath();
      ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  private placeLabel(el: HTMLElement, p: Point) {
    if (this.width < 600) {
      // Narrow scenes: centre each label under its source so the two never collide.
      el.style.transform = `translate(${Math.round(p.x)}px, ${Math.round(p.y + 16)}px) translateX(-50%)`;
      return;
    }
    const flip = p.x > this.width - 170;
    const x = flip ? p.x - 18 : p.x + 18;
    el.style.transform = `translate(${Math.round(x)}px, ${Math.round(p.y - 12)}px) translateX(${flip ? '-100%' : '0'})`;
  }
}
