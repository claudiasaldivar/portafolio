import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cambia 'nombre-del-repositorio' al nombre de tu repositorio en GitHub
  basePath: '/portafolio', 
  output: 'export', // Esta opción es necesaria para la exportación estática
};

export default nextConfig;