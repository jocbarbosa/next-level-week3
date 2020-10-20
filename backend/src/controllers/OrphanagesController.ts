import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename };
        });

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
    },

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        try {
            const orphanages = await orphanagesRepository.find();

            return response.json(orphanages);
        } catch (error) {
            response.status(500).json({
                Message: 'Error',
                Detail: error
            });
        }
    },

    async show(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        const id = request.params.id;

        try {
            const orphanage = await orphanagesRepository.findOneOrFail(id);

            return response.json(orphanage);
        } catch (error) {
            response.status(500).json({
                Message: 'Error',
                Detail: error
            });
        }

    }
}