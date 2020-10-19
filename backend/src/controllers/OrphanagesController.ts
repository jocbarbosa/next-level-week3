import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = orphanagesRepository.create({
            name, latitude, longitude, about, instructions, opening_hours, open_on_weekends
        });

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(request.body);
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