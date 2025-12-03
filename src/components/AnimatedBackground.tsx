import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        
        const colors = [
          "rgba(255, 76, 76, ",
          "rgba(255, 51, 51, ",
          "rgba(255, 102, 102, ",
          "rgba(255, 120, 80, ",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.2;
        ctx.fillStyle = this.color + Math.max(0.1, pulseOpacity) + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Neural network node class
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glow: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.glow = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.glow += 0.03;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        const glowIntensity = 0.5 + Math.sin(this.glow) * 0.3;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4);
        gradient.addColorStop(0, `rgba(255, 76, 76, ${glowIntensity * 0.4})`);
        gradient.addColorStop(1, "rgba(255, 76, 76, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Core
        ctx.fillStyle = `rgba(255, 100, 100, ${glowIntensity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Floating geometric shape class
    class FloatingShape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speedX: number;
      speedY: number;
      type: "triangle" | "square" | "hexagon";
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.15 + 0.05;
        const types: ("triangle" | "square" | "hexagon")[] = ["triangle", "square", "hexagon"];
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(255, 76, 76, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();

        if (this.type === "triangle") {
          for (let i = 0; i < 3; i++) {
            const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2;
            const x = Math.cos(angle) * this.size;
            const y = Math.sin(angle) * this.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        } else if (this.type === "square") {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
          for (let i = 0; i < 6; i++) {
            const angle = (i * 2 * Math.PI) / 6;
            const x = Math.cos(angle) * this.size;
            const y = Math.sin(angle) * this.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }

    // Energy pulse class
    class EnergyPulse {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 100 + 50;
        this.opacity = 0.3;
      }

      update() {
        this.radius += 0.5;
        this.opacity = 0.3 * (1 - this.radius / this.maxRadius);
        
        if (this.radius >= this.maxRadius) {
          this.radius = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.maxRadius = Math.random() * 100 + 50;
        }
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        ctx.strokeStyle = `rgba(255, 76, 76, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Create all elements
    const particles: Particle[] = [];
    const nodes: Node[] = [];
    const shapes: FloatingShape[] = [];
    const pulses: EnergyPulse[] = [];
    
    const particleCount = 120;
    const nodeCount = 40;
    const shapeCount = 15;
    const pulseCount = 5;

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    for (let i = 0; i < nodeCount; i++) nodes.push(new Node());
    for (let i = 0; i < shapeCount; i++) shapes.push(new FloatingShape());
    for (let i = 0; i < pulseCount; i++) pulses.push(new EnergyPulse());

    let animationFrameId: number;
    
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw energy pulses
      pulses.forEach((pulse) => {
        pulse.update();
        pulse.draw();
      });

      // Draw floating shapes
      shapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      // Draw and connect nodes
      nodes.forEach((node, i) => {
        node.update();
        node.draw();

        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = 0.2 * (1 - distance / 180);
            ctx.strokeStyle = `rgba(255, 76, 76, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.7 }}
      />
      
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[100px]" 
          style={{ animation: "float 20s ease-in-out infinite" }} 
        />
        <div 
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" 
          style={{ animation: "float 25s ease-in-out infinite reverse" }} 
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[80px]" 
          style={{ animation: "float 30s ease-in-out infinite" }} 
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-destructive/10 rounded-full blur-[60px]" 
          style={{ animation: "float 22s ease-in-out infinite reverse" }} 
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 76, 76, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 76, 76, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
};

export default AnimatedBackground;
