<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    use HasFactory;

    protected $table = 'turnos'; // Especificamos el nombre de la tabla

    protected $fillable = [
        'nombre_apellido', 
        'fecha_nacimiento', 
        'sexo', 
        'dni', 
        'cobertura', 
        'telefono', 
        'email', 
        'motivo_consulta', 
        'fecha_turno', 
        'hora_inicio', 
        'hora_fin'
    ];

    protected $casts = [
        'fecha_nacimiento' => 'date',
        'fecha_turno' => 'date',
        'hora_inicio' => 'datetime:H:i',  // Cambiar 'time' por 'datetime:H:i'
        'hora_fin' => 'datetime:H:i',     // Cambiar 'time' por 'datetime:H:i'
    ];
    
}
