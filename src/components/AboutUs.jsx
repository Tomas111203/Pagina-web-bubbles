import React from 'react';
import { Award, Users, Star, MapPin, Sparkles, Building, Heart } from 'lucide-react';

export default function AboutUs() {
  const testimonials = [
    {
      name: 'Sofía M. - Estudiante de Nutrición UAA',
      role: 'Cata y Evaluación Sensorial',
      comment: 'Participé en el panel de degustación en el laboratorio de alimentos de la UAA. La textura de la perla es increíble: estalla sin dejar una película grasosa y el sabor a chocolate es auténtico, nada artificial ni amargo.',
      rating: 5,
      date: 'Octubre 2024'
    },
    {
      name: 'Carlos R. - Atleta de Halterofilia',
      role: 'Gimnasio Universitario UAA',
      comment: 'Siempre odié cargar el shaker apestoso a la universidad. Pongo 3 cucharadas de Bubbles en mi café frío antes de entrenar y obtengo mis 20g de proteína de volada. ¡Una genialidad de producto!',
      rating: 5,
      date: 'Septiembre 2024'
    },
    {
      name: 'Mariana G. - Entusiasta del Boba Tea',
      role: 'Consumidora habitual',
      comment: 'Las perlas explosivas comerciales son pura azúcar. Bubbles me da la misma diversión de morder la perla pero sabiendo que me estoy nutriendo con proteína de suero de alta calidad.',
      rating: 5,
      date: 'Octubre 2024'
    }
  ];

  const alliedSpots = [
    {
      name: 'Cafetería Central UAA',
      location: 'Campus Central, Edificio 1, Aguascalientes',
      status: 'Punto de Recolección Oficial',
      badge: 'Entrega Gratuita',
      desc: 'Pasa por tus pedidos de tienda en línea presentando tu número de orden.'
    },
    {
      name: 'Gimnasio Universitario UAA',
      location: 'Área Deportiva Campus Central',
      status: 'Punto de Muestra & Venta Aliada',
      badge: 'Aliado Estratégico',
      desc: 'Degustaciones programadas y venta de botes de 500g para estudiantes y atletas.'
    },
    {
      name: 'Fit Zone & Coffee Norte',
      location: 'Av. Universidad #104, Col. Campestre, Ags.',
      status: 'Cafetería Colaboradora',
      badge: 'Barra Boba',
      desc: 'Pide tu frappé o iced latte con adición de perlas BUBBLES Chocolate.'
    }
  ];

  return (
    <section id="nosotros" className="section-padding" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        
        {/* About Us Story Card */}
        <div style={{
          background: 'linear-gradient(135deg, #2b2521 0%, #1c1c1c 100%)',
          border: '1px solid rgba(198, 148, 102, 0.25)',
          borderRadius: '24px',
          padding: '48px 36px',
          marginBottom: '72px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Watermark Logo */}
          <div style={{
            position: 'absolute',
            right: '-30px',
            bottom: '-40px',
            opacity: 0.05,
            pointerEvents: 'none'
          }}>
            <img src="./img/logo1.png" alt="" style={{ width: '380px' }} />
          </div>

          <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
            <div className="badge-tag" style={{ marginBottom: '14px' }}>
              <Award size={14} /> Emprendimiento Hidrocálido
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: '#ffffff', marginBottom: '18px' }}>
              Nacidos en la <span className="text-gradient-gold">Universidad Autónoma de Aguascalientes</span>
            </h2>
            <p style={{ color: '#d1d5db', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '18px' }}>
              <strong>BUBBLES</strong> es el resultado del talento, la ciencia y la pasión de un equipo de estudiantes de <strong>9no Semestre en la UAA</strong> dentro de la materia de Emprendedores. 
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Identificamos una necesidad real compartida por miles de personas: la suplementación con proteína tradicional es aburrida, genera vasos olorosos difíciles de lavar y muchas veces no se disfruta. Decidimos transformar la gastronomía molecular y la tendencia global del Bubble Tea en una alternativa funcional con aislado de proteína de suero de leche, creando una experiencia sensorial donde cada estallido nutre tu cuerpo.
            </p>

            {/* Core Values */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '4px' }}>Innovación Alimentaria</div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Técnicas de esferificación aplicadas a la nutrición deportiva.</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '4px' }}>Rigor Científico</div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Formulación probada y respaldada en laboratorios universitarios.</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#60a5fa', marginBottom: '4px' }}>Orgullo Local</div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Hecho en Aguascalientes con calidad para todo México.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <div className="badge-tag" style={{ marginBottom: '10px' }}>
              <Star size={14} /> Validación de Mercado
            </div>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '10px' }}>
              Lo Que Dicen Quienes Ya Probaron BUBBLES
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Reseñas reales recabadas durante las jornadas de validación y cata ciega con la comunidad universitaria y deportiva.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#282828'
                }}
              >
                <div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#f59e0b' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ color: '#d1d5db', fontSize: '0.925rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '18px' }}>
                    "{t.comment}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '12px' }}>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#f59e0b' }}>{t.role}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where to Buy (Puntos Aliados) */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <div className="badge-tag" style={{ marginBottom: '10px' }}>
              <MapPin size={14} /> Puntos de Venta y Entrega Aliados
            </div>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '10px' }}>
              ¿Dónde Comprar en Aguascalientes?
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Puedes ordenar en línea con entrega a domicilio o visitarnos en nuestros puntos aliados en la ciudad:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px'
          }}>
            {alliedSpots.map((spot, idx) => (
              <div
                key={idx}
                style={{
                  background: '#262626',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#f59e0b',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px'
                    }}>
                      {spot.badge}
                    </span>
                    <Building size={18} color="#9ca3af" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '6px' }}>
                    {spot.name}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600, marginBottom: '8px' }}>
                    {spot.status}
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '14px' }}>
                    {spot.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', fontSize: '0.8rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} />
                  <span>{spot.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
