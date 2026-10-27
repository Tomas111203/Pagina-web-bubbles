import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Zap, Award } from 'lucide-react';

export default function Hero({ onAddToCart }) {
  const [popCount, setPopCount] = useState(0);
  const [isBursting, setIsBursting] = useState(false);
  const [burstMessage, setBurstMessage] = useState(null);

  // Web Audio API simulated pop sound (zero external asset dependency)
  const playPopSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.14);
    } catch (e) {
      // AudioContext might be muted or restricted
    }
  };

  const handlePopBubble = (e) => {
    playPopSound();
    setIsBursting(true);
    setPopCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#54311c', '#c69466', '#ea580c', '#ffffff'],
      ticks: 120,
      gravity: 1.1,
      shapes: ['circle'],
      scalar: 0.9,
    });

    const messages = [
      '¡BOOM! +2.5g de Proteína Pura',
      '¡Explosión de Cacao Belga!',
      '¡0 Grumos, 100% Sabor!',
      '¡Revienta la Rutina!',
    ];
    setBurstMessage(messages[popCount % messages.length]);

    setTimeout(() => {
      setIsBursting(false);
    }, 400);

    setTimeout(() => {
      setBurstMessage(null);
    }, 1800);
  };

  return (
    <section style={{
      position: 'relative',
      paddingTop: '40px',
      paddingBottom: '80px',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient background orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(198, 148, 102, 0.12) 0%, rgba(55, 55, 55, 0.05) 60%, transparent 80%)',
        zIndex: 0,
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Headlines & Value Prop */}
          <div>
            {/* Project Origin Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span className="badge-tag">
                <Award size={14} /> Orgullo UAA • 9° Semestre Emprendedores
              </span>
              <span className="badge-seal">EXCESO PROTEÍNA</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: 1.12
            }}>
              BUBBLES <br />
              <span className="text-gradient-gold">Revienta la Rutina</span>
            </h1>

            {/* Single Sentence Value Proposition */}
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#f3e8dc',
              fontWeight: 500,
              maxWidth: '580px',
              lineHeight: 1.5,
              marginBottom: '16px'
            }}>
              <strong style={{ color: '#ffffff' }}>Perlas explosivas con proteína</strong> que se agregan directamente a tu bebida favorita, frías o calientes.
            </p>

            <p style={{
              fontSize: '1rem',
              color: '#9ca3af',
              maxWidth: '540px',
              marginBottom: '32px'
            }}>
              Disfruta la divertida experiencia sensorial del boba mientras nutres tu cuerpo con <strong style={{ color: '#f59e0b' }}>20g de proteína de suero de leche</strong> por porción. Sin polvos secos, sin shakers sucios y listas para disfrutar.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#tienda" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <span>Comprar Ahora</span>
                <ArrowRight size={18} />
              </a>
              <a href="#producto" className="btn-secondary">
                Ver Qué Lo Hace Diferente
              </a>
            </div>

            {/* Quick Survey & Quality Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-heading)' }}>20g</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Proteína de Suero por porción</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-heading)' }}>53%</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Atributo más valorado (Estudio UAA)</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60a5fa', fontFamily: 'var(--font-heading)' }}>0 Shakers</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Cero grumos, listas para servir</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Burst Simulator & Brand Visual */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
              border: '2px solid rgba(198, 148, 102, 0.25)',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)',
              textAlign: 'center'
            }}>
              
              {/* Product Poster Image */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#161616',
                border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '20px'
              }}>
                <img
                  src="./img/producto2.png"
                  alt="BUBBLES Perlas Explosivas de Chocolate"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />
                
                {/* Floating Clickable Boba Bubble Simulator */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10
                }}>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    color: '#fef3c7',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Sparkles size={14} color="#f59e0b" />
                    <span>¡Haz clic abajo para reventar!</span>
                  </div>
                </div>
              </div>

              {/* Interactive Bubble Pop Button */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                <button
                  onClick={handlePopBubble}
                  id="pop-bubble-interactive"
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: isBursting
                      ? 'radial-gradient(circle at 35% 35%, #8f532f 0%, #381e11 80%)'
                      : 'radial-gradient(circle at 30% 30%, #54311c 0%, #20100a 85%)',
                    border: '3px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 8px 25px rgba(84, 49, 28, 0.8), inset 0 2px 8px rgba(255,255,255,0.3)',
                    transform: isBursting ? 'scale(1.2)' : 'scale(1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative'
                  }}
                  className="floating-boba"
                  title="Haz clic para reventar la perla"
                >
                  <span style={{
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                  }}>
                    {isBursting ? '💥 POP!' : '¡Muerde!'}
                  </span>
                </button>

                {burstMessage && (
                  <div style={{
                    color: '#f59e0b',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    animation: 'fadeIn 0.2s ease-out'
                  }}>
                    {burstMessage}
                  </div>
                )}

                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                  Perlas reventadas en esta sesión: <strong style={{ color: '#ffffff' }}>{popCount}</strong> ({((popCount * 2.5)).toFixed(1)}g de proteína liberada)
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
