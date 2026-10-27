import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Layers, Package, Clock, Eye, ShieldAlert } from 'lucide-react';
import producto1 from '../../img/producto1.png';

export default function ProductInfo() {
  const [selectedFlavor, setSelectedFlavor] = useState('chocolate');

  const flavors = [
    {
      id: 'chocolate',
      name: 'Chocolate Belga Intenso',
      tag: '¡Disponible Ahora!',
      available: true,
      color: '#54311c',
      accent: '#c69466',
      description: 'Núcleo líquido enriquecido con auténtico cacao fino y proteína de suero aislada. Dulzor balanceado y sensación cremosa indulgente.',
      profile: 'Rico, achocolatado, cremoso y con ligero toque avainillado.'
    },
    {
      id: 'vainilla',
      name: 'Vainilla Francesa Bourbon',
      tag: 'Próximo Lanzamiento',
      available: false,
      color: '#d4a373',
      accent: '#faedcd',
      description: 'Notas cálidas y aromáticas de vainilla natural de Papantla infusionada con suero ultrafiltrado.',
      profile: 'Suave, aromático, ideal para café matutino y matcha.'
    },
    {
      id: 'fresa',
      name: 'Fresa Silvestre Cream',
      tag: 'Próximo Lanzamiento',
      available: false,
      color: '#b91c1c',
      accent: '#fca5a5',
      description: 'Extracto natural de fresas frescas con el toque lácteo del suero de leche. Una explosión frutal hiperrefrescante.',
      profile: 'Frutal, ligeramente ácido y cremoso.'
    },
    {
      id: 'matcha',
      name: 'Matcha Ceremonial Latte',
      tag: 'En Desarrollo UAA',
      available: false,
      color: '#15803d',
      accent: '#86efac',
      description: 'Té verde matcha japonés de grado ceremonial con antioxidantes y proteína funcional.',
      profile: 'Herbal, sofisticado y energizante.'
    }
  ];

  const currentFlavor = flavors.find((f) => f.id === selectedFlavor);

  return (
    <section id="producto" className="section-padding" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
          <div className="badge-tag" style={{ marginBottom: '14px' }}>
            Innovación en Suplementación Deportiva
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '18px' }}>
            ¿Qué hace a <span className="text-gradient-gold">BUBBLES</span> tan diferente?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.6 }}>
            Dejamos atrás los polvos secos, los batidores imposibles de lavar y las rutinas monótonas. Creamos una forma placentera y divertida de alcanzar tus requerimientos diarios de proteína.
          </p>
        </div>

        {/* 3 Core Differentiators */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}>
          {/* Card 1 */}
          <div className="card-glass" style={{ borderTop: '4px solid #ea580c' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              backgroundColor: 'rgba(234, 88, 12, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ea580c',
              marginBottom: '20px'
            }}>
              <Sparkles size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>
              1. 100% Práctico y Listo
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Olvida el shaker apestoso en la mochila o limpiar grumos adheridos al vaso. Abre el envase, agrega 2 a 3 cucharadas a tu bebida y está listo en 5 segundos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-glass" style={{ borderTop: '4px solid #f59e0b' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>
              2. Dosificación Precisa
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Cada porción contiene <strong style={{ color: '#ffffff' }}>20g exactos de proteína</strong> de suero de leche de alta biodisponibilidad. Tú controlas cuánto consumes sin derramar polvos en la barra.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-glass" style={{ borderTop: '4px solid #10b981' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              marginBottom: '20px'
            }}>
              <Layers size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>
              3. Experiencia Sensorial
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              La textura elástica y esférica del alginato natural estalla al primer mordisco, liberando una cascada de chocolate líquido reconfortante en tu paladar.
            </p>
          </div>
        </div>

        {/* Product Packaging & Visual Presentation Showcase */}
        <div style={{
          background: 'linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '40px',
          marginBottom: '72px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="showcase-grid">
            
            {/* Real Product Photo 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6)',
                backgroundColor: '#ffffff'
              }}>
                <img
                  src={producto1}
                  alt="BUBBLES Envase de Perlas Explosivas con sello Exceso Proteína"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ marginTop: '14px', fontSize: '0.85rem', color: '#9ca3af' }}>
                Etiqueta oficial de BUBBLES con sello representativo de alta concentración proteica.
              </div>
            </div>

            {/* Packaging Details */}
            <div>
              <div className="badge-tag" style={{ marginBottom: '12px' }}>
                Presentación y Especificaciones
              </div>
              <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '16px' }}>
                Bote Hermético de 500 g y 1 kg
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Diseñado para conservar la integridad esférica de las perlas y preservar la frescura láctea de la proteína en refrigeración.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '28px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Package size={20} color="#f59e0b" style={{ marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700, color: '#ffffff' }}>500 g de Contenido</div>
                  <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Rinde de 10 a 14 porciones generosas</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Clock size={20} color="#10b981" style={{ marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700, color: '#ffffff' }}>45 Días de Vida Útil</div>
                  <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>En refrigeración sellada a 2°C - 4°C</div>
                </div>
              </div>

              {/* Texture explanation */}
              <div style={{
                background: 'rgba(84, 49, 28, 0.25)',
                border: '1px solid rgba(198, 148, 102, 0.3)',
                padding: '18px',
                borderRadius: '16px'
              }}>
                <h4 style={{ color: '#f3e8dc', fontSize: '1.05rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} color="#c69466" />
                  Textura Única: Esferificación Molecular
                </h4>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Membrana exterior imperceptible de alginato de sodio grado alimentario que resiste temperaturas de bebidas frías o tibias hasta 60°C sin desintegrarse hasta que la muerdes.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Flavors Selector */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '10px' }}>
              Catálogo de Sabores
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Comenzamos con nuestro sabor insignia de chocolate belga, formulado especialmente para los paladares más exigentes.
            </p>
          </div>

          {/* Flavor Tabs */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            {flavors.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFlavor(f.id)}
                style={{
                  background: selectedFlavor === f.id ? '#373737' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedFlavor === f.id ? '#ffffff' : '#9ca3af',
                  border: selectedFlavor === f.id ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '12px 22px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: f.color
                }} />
                <span>{f.name}</span>
                {f.available && (
                  <span style={{
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}>ACTIVO</span>
                )}
              </button>
            ))}
          </div>

          {/* Selected Flavor Detail Card */}
          {currentFlavor && (
            <div style={{
              background: 'linear-gradient(145deg, #282828 0%, #202020 100%)',
              border: `1px solid ${currentFlavor.accent}40`,
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '800px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
              alignItems: 'center'
            }}>
              <div>
                <span style={{
                  backgroundColor: currentFlavor.available ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                  color: currentFlavor.available ? '#34d399' : '#fbbf24',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  {currentFlavor.tag}
                </span>
                <h4 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '10px' }}>
                  {currentFlavor.name}
                </h4>
                <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '14px' }}>
                  {currentFlavor.description}
                </p>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  <strong>Perfil de Sabor:</strong> {currentFlavor.profile}
                </div>
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle at 35% 35%, ${currentFlavor.accent} 0%, ${currentFlavor.color} 80%)`,
                  margin: '0 auto 16px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }} className="floating-boba" />
                <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  {currentFlavor.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '16px' }}>
                  20g Proteína de Suero por servicio
                </div>
                {currentFlavor.available ? (
                  <a href="#tienda" className="btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Pedir Este Sabor
                  </a>
                ) : (
                  <button
                    disabled
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#6b7280',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      width: '100%',
                      cursor: 'not-allowed',
                      fontSize: '0.85rem'
                    }}
                  >
                    Próximamente en Venta
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .showcase-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
