<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('turnos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_apellido'); 
            $table->date('fecha_nacimiento'); 
            $table->string('sexo')->nullable(); 
            $table->string('dni')->nullable(); 
            $table->string('cobertura')->nullable(); 
            $table->string('telefono')->nullable(); 
            $table->string('email')->nullable(); 
            $table->text('motivo_consulta')->nullable(); 
            $table->date('fecha_turno'); 
            $table->time('hora_inicio');
            $table->time('hora_fin');
            $table->string('obra_social')->nullable(); 
            $table->string('afiliado_OB')->nullable(); 
            $table->string('titular_OB')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('turnos');
    }
};
