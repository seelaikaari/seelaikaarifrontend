import React from "react";
import "./About.css";
import "animate.css";


const About = () => {
  return (
    <div className="about-us container">
      <div className="row align-items-center">
        <h1 className="text-center mb-4">About Seelaikari</h1>

        <div className="col-md-6 about-text animate__animated animate__fadeInLeft">
          <p>
            Welcome to <strong>Seelaikari</strong>, your one-stop destination
            for the finest collection of traditional silk sarees and a wide
            variety of other exquisite sarees. Our mission is to preserve the
            rich cultural heritage of India through timeless craftsmanship and
            vibrant designs. Each saree at Seelaikari is carefully handpicked,
            showcasing the artistry and intricacy of skilled artisans who have
            perfected their craft over generations.
          </p>

          <h2 className="section-title">The Seelaikari Story</h2>
          <p>
            Seelaikari was founded with a deep passion for Indian heritage and
            the timeless beauty of sarees. Our journey began with a vision to
            bring authentic, high-quality sarees to every woman who values
            tradition and elegance. We work closely with skilled artisans across
            India, ensuring that every weave, pattern, and color embodies the
            soul of our rich textile legacy.
          </p>

          <h2 className="section-title">Our Craftsmanship</h2>
          <p>
            Each saree at Seelaikari is a masterpiece, woven with care and
            dedication. Our artisans use age-old techniques, blending tradition
            with modern aesthetics. From the luxurious Kanjivaram silk to the
            airy elegance of Chanderi cotton, we curate sarees that cater to
            every taste and occasion. Our designs celebrate India's diverse
            weaving traditions, making each drape a story in itself.
          </p>

          <h2 className="section-title">Meet Our Founder</h2>
          <p>
            <strong>Akilesh A</strong>, the visionary behind Seelaikari, has
            always been fascinated by the timeless grace of sarees. With a deep
            appreciation for traditional craftsmanship and a desire to empower
            artisans, she embarked on a journey to create a brand that connects
            heritage with modern fashion. Under her leadership, Seelaikari has
            grown into a trusted name, celebrating the artistry and culture of
            India's textile industry.
          </p>
        </div>

        <div className="col-md-6 text-center animate__animated animate__fadeInRight">
          <img
            src="https://files.oaiusercontent.com/file-F5eSqDRHn6Xd1mhoqnXvMo?se=2025-02-03T11%3A35%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db9f43d46-117e-4085-b0cd-c3255dcc3da2.webp&sig=E5f4fVmQDR8toJhSURoehofHMTppV5hz1ciEkM0dNrY%3D"
            alt="About Seelaikari"
            className="img-fluid about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;