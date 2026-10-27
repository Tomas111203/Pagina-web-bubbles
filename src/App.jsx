import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductInfo from './components/ProductInfo';
import NutritionSection from './components/NutritionSection';
import HowToUse from './components/HowToUse';
import StoreSection from './components/StoreSection';
import AboutUs from './components/AboutUs';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import LegalModals from './components/LegalModals';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    // Start with 1 item for convenient demonstration of cart capability
    {
      id: 'duo',
      name: 'BUBBLES Dúo Pack (2 x 500g)',
      price: 449,
      quantity: 1,
      flavor: 'Chocolate Belga Intenso (x2)',
      servings: '20 - 28 Porciones'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.flavor === product.flavor);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.flavor === product.flavor
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });

    showToast(`¡Se agregó ${product.quantity}x ${product.name} al carrito!`);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (itemId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bubbles-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '84px',
          right: '24px',
          zIndex: 2000,
          background: '#10b981',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 600,
          fontSize: '0.9rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onAddToCart={handleAddToCart} />
        <ProductInfo />
        <NutritionSection />
        <HowToUse />
        <StoreSection onAddToCart={handleAddToCart} />
        <AboutUs />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={(modalId) => setActiveLegalModal(modalId)} />

      {/* Cart & Checkout Modal Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Regulatory & Legal Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
