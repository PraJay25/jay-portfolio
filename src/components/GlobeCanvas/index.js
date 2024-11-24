import React, { useEffect, useRef } from "react";
import "./style.css";

const images = [
  { src: "/angular.png", label: "Angular" },
  { src: "/aws.png", label: "AWS" },
  { src: "/c-.png", label: "C++" },
  { src: "/c-sharp.png", label: "C-Sharp" },
  { src: "/docker.png", label: "Docker" },
  { src: "/java.png", label: "Java" },
  { src: "/js.png", label: "JavaScript" },
  { src: "/net.png", label: ".Net" },
  { src: "/React.png", label: "React" },
  { src: "/typescript.png", label: "Typescript" },
  { src: "/kafka.png", label: "" },
  { src: "/apache.png", label: "" },
  { src: "/tenserflow.png", label: "Tenserflow" },
  { src: "/python.png", label: "Python" },
  { src: "/gpt.png", label: "Open AI" },
  { src: "/gcp.png", label: "GCP" },
  { src: "/relativity.png", label: "Relativity" },
  { src: "/kubernet.png", label: "Kubernetes" },
  { src: "/RabbitMQ.png", label: "RabbitMQ" },
  { src: "/git.png", label: "GIT" },
  { src: "/git2.png", label: "GitHub" },
  { src: "/Gitlab.png", label: "GitLab" },
  { src: "/cicd.png", label: "Jetkins" },
  { src: "/tailwind.png", label: "Tailwind" },
  { src: "/three.png", label: "Three" },
  { src: "/node.jpg", label: "Node" },
  { src: "/aspnet.jpg", label: "ASP.NET" },
  { src: "/MySQL.png", label: "MySQL" },
  { src: "/nextjs.png", label: "Next" },
  { src: "/jquery.png", label: "JQuery" },
  { src: "/json.png", label: "JSON" },
  { src: "/rest.png", label: "REST" },
  { src: "/svn.png", label: "SVN" },
  { src: "/express.webp", label: "Express" },
  { src: "/post.png", label: "Postgre" },
  { src: "/awss.webp", label: "" },
  { src: "/chrome.png", label: "DevTools" },
  { src: "/open.png", label: "Open Source" },
  { src: "/golang.png", label: "Golang" },
  { src: "/css.png", label: "CSS" },
  { src: "/redis.png", label: "Redis" },
  { src: "/devops.png", label: "DevOps" },
  { src: "/Cloudflare.png", label: "Cloudflare" },
  { src: "/azure.png", label: "AZURE" },
  { src: "/nuget.png", label: "NuGet" },
  { src: "/Spring.png", label: "Spring" },
  { src: "/HTML5.png", label: "HTML" },
  { src: "/Cassandra.png", label: "Cassandra" },
  { src: "/Ubuntu.png", label: "Ubuntu" },
  { src: "/Material UI.png", label: "Material UI" },
  { src: "/Vue.js.png", label: "Vue" },
  { src: "/Swagger.png", label: "Swagger" },
  { src: "/Stack Overflow.png", label: "Stack Overflow" },
  { src: "/Bootstrap.png", label: "Bootstrap" },
  { src: "/GitHub Codespaces.png", label: "GitHub Codespaces" },
  { src: "/MongoDB.png", label: "MongoDB" },
];

const GlobeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && window.TagCanvas) {
      window.TagCanvas.Start("myCanvas", "tags", {
        textColour: "#000000",
        outlineColour: "#ff00ff",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        minSpeed: 0.01,
        wheelZoom: false,
        shuffleTags: true,
        shape: "sphere", // Honeycomb pattern "sphere", "hcylinder", "vcylinder", "hcone", "vcone", "hexagon"
        //lock: "x",
        zoom: 1,
        noSelect: true,
        textHeight: 10, // Adjust the text height
        imageMode: "both",
        imagePosition: "top",
        imageScale: 0.1, // Scale down the images
        initial: [0.1, -0.1],
      });
    }

    return () => {
      if (window.TagCanvas) {
        window.TagCanvas.Delete("myCanvas");
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myCanvas" ref={canvasRef} width={800} height={600}>
        <ul id="tags">
          {images.map((img, index) => (
            <li key={index}>
              <a href="#">
                <img src={img.src} alt={img.label} />
                {img.label}
              </a>
            </li>
          ))}
        </ul>
      </canvas>
    </div>
  );
};

export default GlobeCanvas;
