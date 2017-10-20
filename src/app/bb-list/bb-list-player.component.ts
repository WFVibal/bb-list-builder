import { Component, Input } from "@angular/core";

export class BBPlayer {
    public Player_ID: string = null;
    public Player_Type_ID: string;
    public Agility: number;
    public Agility_Skills: boolean;
    public Armor: number;
    public General_Skills: boolean;
    public Movement: number;
    public Passing_Skills: boolean;
    public  Physical_Skills: boolean;
    public Position_Name: string;
    public Skill_List: string[];
    public Strength: number;
    public Strength_Skills: boolean;
    public Team_Max: number;
    public Value: number;
}
