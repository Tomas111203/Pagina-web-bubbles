import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo se deben conservar las perlas BUBBLES?',
      a: 'Deben mantenerse siempre en refrigeración constante entre 2°C y 4°C. Es fundamental NO CONGELARLAS, ya que el hielo rompe la delgada membrana exterior de alginato y provocaría que el relleno líquido se escape antes de tiempo.'
    },
    {
      q: '¿Cuál es la vida útil y fecha de caducidad?',
      a: 'Cerrado herméticamente en refrigeración, el bote tiene una caducidad de 45 días a partir de su elaboración. Una vez abierto el sello de garantía, recomendamos consumirlo dentro de los 7 a 10 días para disfrutar de la máxima frescura y textura óptima.'
    },
    {
      q: '¿A qué saben y qué se siente al comerlas?',
      a: 'Tienen una textura exterior similar a la de las perlas explosivas (popping boba) tradicionales, elástica y suave. Al masticarlas o presionarlas contra tu paladar estallan con un agradable "POP", liberando un centro cremoso y achocolatado formulado con cacao puro belga y proteína de suero aislada sin regusto arenoso ni amargo.'
    },
    {
      q: '¿Cómo y cuándo debo reventar la perla?',
      a: 'Agrégalas directamente al vaso con tu bebida. Usa un popote ancho de boba (12 mm) o una cuchara. La perla se mantiene intacta en el líquido; el momento de reventarla es dentro de tu boca al morderla. ¡Esa es la magia de BUBBLES!'
    },
    {
      q: '¿Contiene lactosa y qué tipo de proteína utilizan?',
      a: 'Utilizamos Aislado de Proteína de Suero de Leche (Whey Protein Isolate 90%), el cual tiene un contenido mínimo de lactosa y grasa. Sin embargo, al ser un derivado lácteo directo, CONTIENE LECHE y no es apto para personas con alergia severa a las proteínas lácteas.'
    },
    {
      q: '¿Puedo utilizarlas en café o té caliente?',
      a: '¡Sí! La membrana de alginato resiste bebidas tibias o moderadamente calientes hasta 60°C (temperatura ideal para beber sin quemarse). Evita agregarlas a líquidos hirviendo para no ablandar la textura prematuramente.'
    },
    {
      q: '¿Por qué al inicio las entregas son solo en Aguascalientes?',
      a: 'Al ser un producto fresco con proteína láctea de alta pureza, cuidamos meticulosamente la cadena de frío (2°C a 4°C). Para garantizar que recibas las perlas en su estado perfecto, operamos con entregas locales en empaque térmico en Aguascalientes y Jesús María, además del punto de recolección gratuito en la UAA. Próximamente habilitaremos envíos refrigerados nacionales.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <HelpCircle size={14} /> Resolvemos Todas Tus Dudas
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: '#ffffff', marginBottom: '16px' }}>
            Preguntas Frecuentes
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Todo lo que necesitas saber sobre el almacenamiento, modo de consumo y beneficios de BUBBLES.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? '#282828' : '#222222',
                  border: isOpen ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    color: '#ffffff',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontWeight: 600
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    color: isOpen ? '#f59e0b' : '#9ca3af',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px',
                    color: '#d1d5db',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '14px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px'
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.925rem', margin: '0 0 10px' }}>
            ¿Tienes alguna otra duda o consulta para tu pedido o proyecto?
          </p>
          <a
            href="https://wa.me/524491234567?text=Hola,%20tengo%20una%20duda%20sobre%20BUBBLES%20Proteina"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#f59e0b',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Escríbenos directamente a nuestro WhatsApp oficial</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
