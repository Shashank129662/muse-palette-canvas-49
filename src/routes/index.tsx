import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, BellRing, Boxes, Camera, CheckCircle2,
  Gift, HeartPulse, Home, Instagram, Laptop, Menu, Plane, Search,
  ShieldCheck, ShoppingBag, Sofa, Sparkles, UtensilsCrossed, X,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import heroVisual from "@/assets/sections/hero_section.png.asset.json";
import bestDeals from "@/assets/sections/best_deals_section.png.asset.json";
import giftBox from "@/assets/sections/offersbox-giftbox-reference-hq.png.asset.json";
import categoryCallout from "@/assets/sections/category-callout.png.asset.json";
import stepArrow from "@/assets/sections/curved-dashed-arrow-hq.png.asset.json";
import newGiftBox from "@/assets/sections/offersbox-new-giftbox.png.asset.json";
import myntra from "@/assets/brands/myntra.png.asset.json";
import flipkart from "@/assets/brands/flipkart.png.asset.json";
import zomato from "@/assets/brands/zomato.png.asset.json";
import makeMyTrip from "@/assets/brands/MakeMyTrip.png.asset.json";
import ajio from "@/assets/brands/ajio.png.asset.json";
import reliance from "@/assets/brands/reliance.png.asset.json";
import travel from "@/assets/products/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg.asset.json";
import skincare from "@/assets/products/minimalist-skin-care-product-presentation.jpg.asset.json";
import sneakers from "@/assets/products/close-up-futuristic-sneakers.jpg.asset.json";
import burger from "@/assets/products/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg.asset.json";
import priya from "@/assets/avatar/avatar-priya.jpg.asset.json";
import rohan from "@/assets/avatar/avatar-rohan.jpg.asset.json";
import sneha from "@/assets/avatar/avatar-sneha.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OffersBox | Everyday Deals & Savings" },
      { name: "description", content: "Discover verified offers and exclusive discounts from your favourite brands, updated every day." },
      { property: "og:title", content: "OffersBox | Everyday Deals & Savings" },
      { property: "og:description", content: "Discover verified offers and exclusive discounts from your favourite brands, updated every day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brands = [
  { name: "amazon", text: "amazon" },
  { name: "Flipkart", image: flipkart.url },
  { name: "Myntra", image: myntra.url },
  { name: "Zomato", image: zomato.url },
  { name: "MakeMyTrip", image: makeMyTrip.url },
  { name: "AJIO", image: ajio.url },
  { name: "Reliance Digital", image: reliance.url },
];

const categories = [
  { name: "Fashion", icon: ShoppingBag }, { name: "Electronics", icon: Laptop },
  { name: "Travel", icon: Plane }, { name: "Food & Dining", icon: UtensilsCrossed },
  { name: "Beauty & Personal Care", icon: Sparkles }, { name: "Home & Living", icon: Sofa },
  { name: "Health & Wellness", icon: HeartPulse }, { name: "More", icon: Boxes },
];

const deals = [
  { brand: "amazon", headline: "Up to 70% Off", detail: "On Electronics", image: travel.url },
  { brand: "Myntra", logo: myntra.url, headline: "Flat 50% Off", detail: "On Top Fashion Brands", image: skincare.url },
  { brand: "Zomato", logo: zomato.url, headline: "Flat 60% Off", detail: "On Food Orders", image: burger.url },
  { brand: "MakeMyTrip", logo: makeMyTrip.url, headline: "Up to 40% Off", detail: "On Hotels & Flights", image: travel.url },
  { brand: "AJIO", logo: ajio.url, headline: "Min. 50% Off", detail: "On Top Brands", image: sneakers.url },
];

const testimonials = [
  { name: "Priya S.", image: priya.url, quote: "Found amazing deals on my favourite brands. OffersBox has become my go-to!" },
  { name: "Rohan M.", image: rohan.url, quote: "Super easy to use, and the offers are genuinely useful. Highly recommended!" },
  { name: "Sneha K.", image: sneha.url, quote: "I love how updated the offers are. Always find something new!" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top" className="overflow-hidden bg-background">
      <section className="hero-band">
        <header className="site-header page-shell">
          <BrandMark light />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#top">Home</a><a href="#categories">Categories</a><a href="#how">How It Works</a>
            <a href="#why">Why OffersBox</a><a href="#faq">FAQ</a>
          </nav>
          <a className="button button--warm header-cta" href="#deals">Explore Offers <ArrowRight /></a>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why OffersBox</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>}
        </header>

        <div className="hero-content page-shell">
          <div className="hero-copy">
            <span className="eyebrow eyebrow--hero">Same brands. Bigger savings.</span>
            <h1>Your Everyday<br /><span>Savings Partner</span></h1>
            <p>Curated deals, verified offers and exclusive discounts from your favourite brands — all in one place.</p>
            <div className="hero-actions">
              <a className="button button--warm" href="#deals">Explore Offers <ArrowRight /></a>
              <a className="button button--ghost" href="#how"><span className="play-dot">▶</span> Watch How It Works</a>
            </div>
            <div className="trust-points">
              <div><ShieldCheck /><strong>Verified Offers</strong><small>Trusted & safe</small></div>
              <div><CheckCircle2 /><strong>Updated Daily</strong><small>Fresh deals everyday</small></div>
              <div><BellRing /><strong>Wide Range</strong><small>1000+ brands</small></div>
            </div>
          </div>
          <div className="hero-art"><img src={heroVisual.url} alt="OffersBox app showing deals from popular brands" /></div>
        </div>
      </section>

      <section className="brand-strip" aria-label="Featured brands">
        <span className="eyebrow">Trusted by 500K+ smart shoppers</span>
        <div className="brand-row page-shell">
          {brands.map((brand) => <div className="brand-tile" key={brand.name}>
            {brand.image ? <img src={brand.image} alt={brand.name} /> : <strong>{brand.text}</strong>}
          </div>)}
        </div>
      </section>

      <section id="categories" className="section page-shell categories-section">
        <img className="category-callout" src={categoryCallout.url} alt="Something for everyone" />
        <span className="eyebrow">Explore more, spend less</span>
        <h2>Deals for<br /><span>Every Part</span> of Your Life</h2>
        <p className="section-lead">From fashion to food, travel to tech — find the best offers<br className="desktop-only" /> across categories, only on OffersBox.</p>
        <div className="category-grid">
          {categories.map(({ name, icon: Icon }) => <a href="#deals" className="category-item" key={name}>
            <span><Icon /></span><strong>{name}</strong>
          </a>)}
        </div>
      </section>

      <section id="how" className="how-band">
        <div className="page-shell how-grid">
          <div className="deal-art"><img src={bestDeals.url} alt="Best deals, verified offers, updated daily" /></div>
          <div>
            <span className="eyebrow">How OffersBox works</span>
            <h2>Save in <span>3 Simple Steps</span></h2>
            <p className="section-lead">Finding and using the best offers has never been easier.</p>
            <div className="steps">
              <div><span><Search /></span><h3>1. Search</h3><p>Find offers from your favourite brands</p></div>
              <img className="step-arrow step-arrow--one" src={stepArrow.url} alt="" aria-hidden="true" />
              <div><span><Camera /></span><h3>2. Choose</h3><p>Pick the best deal that suits you</p></div>
              <img className="step-arrow step-arrow--two" src={stepArrow.url} alt="" aria-hidden="true" />
              <div><span><Gift /></span><h3>3. Save</h3><p>Use the offer and enjoy great savings</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="deals" className="section page-shell deals-section">
        <div className="section-heading-row">
          <div><span className="eyebrow">Today's highlights</span><h2>Grab These <span>Hot Deals</span></h2><p className="section-lead">Handpicked offers from top brands, updated daily.</p></div>
          <a href="#deals" className="text-link">View All Offers <ArrowRight /></a>
        </div>
        <div className="deal-grid">
          {deals.map((deal) => <article className="deal-card" key={deal.brand}>
            <div className="deal-logo">{deal.logo ? <img src={deal.logo} alt={deal.brand} /> : <strong>{deal.brand}</strong>}</div>
            <img className="deal-product" src={deal.image} alt="" />
            <h3>{deal.headline}</h3><p>{deal.detail}</p>
            <a href="#top" className="button button--deal">Get Deal <ArrowRight /></a>
          </article>)}
        </div>
      </section>

      <section id="why" className="why-band">
        <div className="page-shell why-grid">
          <div>
            <span className="eyebrow">Why OffersBox</span>
            <h2>More Than <span>Just Deals</span></h2>
            <p className="section-lead">We bring you a smarter, simpler and safer way to save every day.</p>
            <div className="benefit-grid">
              <div><BadgeCheck /><p><strong>100% Verified</strong><small>Safe & reliable offers</small></p></div>
              <div><ShoppingBag /><p><strong>Wide Range</strong><small>From top brands</small></p></div>
              <div><ShieldCheck /><p><strong>Handpicked Deals</strong><small>Only the best, always</small></p></div>
              <div><Sparkles /><p><strong>Easy to Use</strong><small>Find & use offers in seconds</small></p></div>
              <div><BellRing /><p><strong>Updated Daily</strong><small>Never miss a new deal</small></p></div>
              <div><Gift /><p><strong>Save More</strong><small>Get the best value, always</small></p></div>
            </div>
          </div>
          <div className="gift-art"><img src={newGiftBox.url} alt="OffersBox filled with savings from top brands" /></div>
        </div>
      </section>

      <section className="section testimonials">
        <span className="eyebrow">Loved by smart shoppers</span>
        <h2>Real People. <span>Real Savings.</span></h2>
        <div className="testimonial-grid page-shell">
          {testimonials.map((item) => <article className="testimonial-card" key={item.name}>
            <img src={item.image} alt={item.name} /><div><blockquote>“{item.quote}”</blockquote><strong>{item.name}</strong><div className="stars" aria-label="5 out of 5 stars">★★★★★</div></div>
          </article>)}
        </div>
      </section>

      <section className="cta-band">
        <div className="page-shell cta-grid">
          <div><h2>Ready to Start Saving?</h2><p>Join thousands of smart shoppers who trust OffersBox for the best deals, every day.</p><a className="button button--warm" href="#deals">Explore Offers <ArrowRight /></a></div>
          <div className="cta-gift"><img src={giftBox.url} alt="A gift box full of offers" /></div>
        </div>
      </section>

      <footer id="faq" className="site-footer">
        <div className="page-shell footer-main"><div><BrandMark /><small>Smarter Offers. Happier You.</small></div>
          <nav aria-label="Footer navigation"><a href="#top">Home</a><a href="#categories">Categories</a><a href="#how">How It Works</a><a href="#why">Why OffersBox</a><a href="#faq">FAQ</a></nav>
          <div className="socials"><a href="#top" aria-label="Instagram"><Instagram /></a><a href="#top" aria-label="Facebook">f</a><a href="#top" aria-label="X">𝕏</a><a href="#top" aria-label="YouTube"><Youtube /></a></div>
        </div>
        <div className="page-shell footer-bottom"><small>© 2026 OffersBox. All rights reserved.</small><div><a href="#faq">Terms</a><a href="#faq">Privacy</a><a href="#faq">Cookies</a></div></div>
      </footer>
    </main>
  );
}
