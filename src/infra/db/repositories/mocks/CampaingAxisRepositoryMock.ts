import { CampaignAxisEntity } from "../../../../domain/entities";
import { ICampaingAxisRepository } from "../../../../domain/interfaces";

export class CampaingAxisRepositoryMock implements ICampaingAxisRepository {
  async findCampaingAxisRepositoryByTopic(topicId: string): Promise<CampaignAxisEntity | null> {
    const campaingAxisOutDTO: CampaignAxisEntity = {
      topic: {
        name: "Seguridad",
      },
      proposal: `Nuestras propuestas para mejorar la Seguridad de la provicia son:
     1. Fortalecimiento de la presencia policial en zonas críticas: Aumento de efectivos y patrullas en las zonas más peligrosas, mejorando la capacitación policial.
     2. Implementación de programas de prevención del delito: Creación de programas de prevención para jóvenes en situación de riesgo, fomentando la participación ciudadana en la vigilancia y denuncia de actividades sospechosas.
     3 .Fortalecimiento de la investigación y persecución del delito: Mejora de los recursos tecnológicos y humanos para la investigación de delitos, fomentando la cooperación entre fuerzas de seguridad y justicia para una persecución efectiva de los delitos.`,
    };
    return campaingAxisOutDTO;
  }
  save(entity: CampaignAxisEntity): Promise<CampaignAxisEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<CampaignAxisEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<CampaignAxisEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<CampaignAxisEntity | null> {
    throw new Error("Method not implemented.");
  }
}
