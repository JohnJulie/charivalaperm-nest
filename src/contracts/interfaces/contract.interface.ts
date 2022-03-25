import { Slot } from "./slot.interface";

export interface Contract {
    id: string;
    startContract: Date;
    endContract: Date;
    slots: Array<Slot>;
}