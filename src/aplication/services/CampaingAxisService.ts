import { CampaingAxisOutDTO, LanguageModelOutDTO } from "../../domain/dtos";
import { ICampaingAxisRepository } from "../../domain/interfaces";

export class CampaingAxisService {
  constructor(private readonly campaingAxisRepository: ICampaingAxisRepository) {}

  public findCampaingAxisByTopic = async (name?: string): Promise<CampaingAxisOutDTO> => {
    const campaingAxisOutDTO: CampaingAxisOutDTO = {
      id: "1",
      topic: {
        id: "1",
        name: "Seguridad",
      },
      proposal: `Nuestras propuestas para mejorar la Seguridad de la provicia son:
     1. Fortalecimiento de la presencia policial en zonas críticas: Aumento de efectivos y patrullas en las zonas más peligrosas, mejorando la capacitación policial.
     2. Implementación de programas de prevención del delito: Creación de programas de prevención para jóvenes en situación de riesgo, fomentando la participación ciudadana en la vigilancia y denuncia de actividades sospechosas.
     3 .Fortalecimiento de la investigación y persecución del delito: Mejora de los recursos tecnológicos y humanos para la investigación de delitos, fomentando la cooperación entre fuerzas de seguridad y justicia para una persecución efectiva de los delitos.`,
    };
    return campaingAxisOutDTO;
  };
}
