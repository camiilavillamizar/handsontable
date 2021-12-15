export class MonthAmount{
    periodo: string; 
    amount: string; 
    comments: string; 
}

export class PeriodData{
    monthsAmounts: MonthAmount[]
}

export class cellWithComments{
    value: string;
    comments: string; 
}
export class data{
    control: string; 
    presupuesto: string; 
    presupuestoRevisado: string; 
    ejecutadoAntesAnioActual: string; 
    periodData: PeriodData; 
    totalPrevActualYear: string; 
    periodDataAnioSiguiente: PeriodData; 
    prevRestanteAnioSiguiente: cellWithComments; 
    previsionesFuturo: cellWithComments; 
    previsionCierre: string; 
    diferenciaCierreRevisado: string; 
}

export class HandsontableModel{
    data: data[];
    colHeaders: string[]; 
    columns: string[]; 
    genericData: any;
}

export class comments{
    comment: string;
    column: number; 
    row: number;
}

export interface commentList{
    tabla1: any[]
    tabla2: any[]
}