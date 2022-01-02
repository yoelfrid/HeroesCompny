import { Trainer } from './trainer.interface';

export interface Hero {
    name: string;
    img: string
    ability: string;
    trainer_id: Trainer['id'];
    date_started: number;
    suit_colors: [],
    starting_power: number;
    current_power: number;
    id: string; 
}