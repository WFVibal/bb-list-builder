import { Component, Input } from "@angular/core";
import { BBPlayer } from "./bb-list-player.component";
import { Observable } from 'rxjs/Observable';

class Model {
    Apothecary: boolean;
    Name: string;
    Reroll_Cost: number;
    public Player_Types: BBPlayer[];
    Special_Players: BBPlayer[];
}

@Component({
    selector: '',
    template: '',
    providers: [BBTeam]
})

export class BBTeam {
    constructor(private bbTeam: Model) {}
}