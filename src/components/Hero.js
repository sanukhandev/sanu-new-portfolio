import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Coffee, Database, Globe, Smartphone, Server, Terminal } from 'lucide-react';

const Hero = ({ data = {} }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullTitle = data.title || '';
  const dotIndex = fullTitle.indexOf('.');
  const firstLine = dotIndex !== -1 ? fullTitle.slice(0, dotIndex + 1) : fullTitle;
  const secondLine = dotIndex !== -1 ? fullTitle.slice(dotIndex + 1).trim() : '';

  useEffect(() => {
    if (!fullTitle) return;

    setTypedTitle('');
    setIsTyping(true);

    let i = 0;
    let timeoutId;

    const typeChar = () => {
      if (i <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, i));
        i++;
        timeoutId = setTimeout(typeChar, 60 + Math.random() * 30);
      } else {
        setIsTyping(false);
      }
    };

    typeChar();
    return () => clearTimeout(timeoutId);
  }, [fullTitle]);

  const displayedFirst = typedTitle.slice(0, firstLine.length);
  const displayedSecond = typedTitle.length > firstLine.length
    ? typedTitle.slice(firstLine.length)
    : '';

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Code size={16} />
            <span>Full Stack Developer</span>
          </div>
          <h1 className="hero-title typewriter">
            {displayedFirst}
            {firstLine && typedTitle.length >= firstLine.length && <br />}
            {displayedSecond}
          </h1>
          <p className="hero-subtitle">{data.subtitle}</p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{data.stats?.experience || '0'}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">{data.stats?.projects || '0'}</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">{data.stats?.clients || '0'}</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary">
              Let's Chat! <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              <Coffee size={18} />
              Buy me coffee
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src="/assets/images/sanu.png" 
              alt="Sanu Khan - Full Stack Developer" 
              className="profile-image"
            />
          </div>

          <div className="floating-icons">
            {/* Background layer - blurred and behind image */}
            <div className="tech-icon back-layer large java">
              <Server size={36} color="#f89820" title="Java" />
            </div>
            <div className="tech-icon back-layer large python">
              <Database size={36} color="#3776ab" title="Python" />
            </div>
            <div className="tech-icon back-layer medium php">
              <Globe size={32} color="#777bb3" title="PHP" />
            </div>
            <div className="tech-icon back-layer medium dart">
              <Smartphone size={32} color="#0175c2" title="Dart/Flutter" />
            </div>
            
            {/* Front layer - small and sharp, in front of image */}
            <div className="tech-icon front-layer small js">
              <Code size={20} color="#f7df1e" title="JavaScript" />
            </div>
            <div className="tech-icon front-layer small cpp">
              <Terminal size={20} color="#00599c" title="C++" />
            </div>
            <div className="tech-icon front-layer small typescript">
              <Code size={20} color="#3178c6" title="TypeScript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
