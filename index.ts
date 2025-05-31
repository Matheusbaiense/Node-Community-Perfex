// Importar os módulos sem desestruturação para evitar conflitos de declaração
import { Perfex } from './nodes/Perfex/Perfex.node';
import { PerfexApi } from './credentials/PerfexApi.credentials';

// Exportar os módulos de forma explícita
export { 
	Perfex, 
	PerfexApi 
};

// Adicionar exportação padrão para compatibilidade com CommonJS
export default {
	Perfex,
	PerfexApi
}; 