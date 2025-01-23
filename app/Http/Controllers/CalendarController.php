<?php

namespace App\Http\Controllers;

use App\Models\Turno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CalendarController extends Controller
{
    public function index()
    {
        $colors = [
            '#924ACE', '#68B01A', '#FF5733', '#33FF57',
            '#5733FF', '#FFC300', '#DAF7A6', '#C70039'
        ];

        $events = Turno::all()->map(function ($turno) use ($colors) {
            return [
                'id'              => $turno->id,
                'nombre_apellido' => $turno->nombre_apellido,
                'fecha_nacimiento'=> $turno->fecha_nacimiento,
                'sexo'            => $turno->sexo,
                'dni'             => $turno->dni,
                'cobertura'       => $turno->cobertura,
                'telefono'        => $turno->telefono,
                'email'           => $turno->email,
                'motivo_consulta' => $turno->motivo_consulta,
                'fecha_turno'     => $turno->fecha_turno,
                'hora_inicio'     => $turno->hora_inicio,
                'hora_fin'        => $turno->hora_fin,
                'obra_social'     => $turno->obra_social,
                'afiliado_OB'     => $turno->afiliado_OB,
                'titular_OB'      => $turno->titular_OB,
        
          
                'color'           => $colors[array_rand($colors)],
            ];
        });

        return response()->json(['events' => $events], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre_apellido' => 'required|string|max:255',
            'fecha_nacimiento'=> 'required|date',
            'sexo'            => 'required|string',
            'dni'             => 'nullable|string|max:20',
            'cobertura'       => 'nullable|string|max:255',
            'telefono'        => 'nullable|string|max:15',
            'email'           => 'nullable|email|unique:turnos,email',
            'motivo_consulta' => 'nullable|string',
            'fecha_turno'     => 'required|date',
            'hora_inicio'     => 'required|date_format:H:i',
            'hora_fin'        => 'required|date_format:H:i|after:hora_inicio',
            'obra_social'     => 'nullable|string',
            'afiliado_OB'     => 'nullable|string',
            'titular_OB'      => 'nullable|string',
     
       
        ]);

        $turno = Turno::create($validated);

        return response()->json(['turno' => $turno], 201);
    }

    public function update(Request $request, $id)
    {
        $turno = Turno::findOrFail($id);

        $validated = $request->validate([
            'fecha_turno'     => 'required|date',
            'hora_inicio'     => 'required|date_format:H:i',
            'hora_fin'        => 'required|date_format:H:i|after:hora_inicio',
            'motivo_consulta' => 'nullable|string',
        ]);

        $turno->update($validated);

        return response()->json(['success' => true, 'message' => 'Turno actualizado']);
    }

    public function destroy($id)
    {
        $turno = Turno::findOrFail($id);

        $turno->delete();

        return response()->json(['success' => true, 'message' => 'Turno eliminado', 'id' => $id]);
    }
}
