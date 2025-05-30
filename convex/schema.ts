import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  estudiantes: defineTable({
    numMatricula: v.string(),
    nombre: v.string(),
    correo: v.string(),
  }),
  maestros: defineTable({
    numEmpleado: v.string(),
    nombre: v.string(),
    correo: v.string(),
  }),
  materias: defineTable({
    identificador: v.string(), //Abreviatura de la materia
    nombreMateria: v.string(),
  }),
  salones: defineTable({
    numSalon: v.string(),
    edificio: v.string(), 
    planta: v.string(), //Planta alta o baja
  }),
  horarios: defineTable({
    periodo: v.string(), // Periodo de tiempo (ej: "8:00 AM - 9:00 AM")
  }),
  calificaciones: defineTable({
    estudianteId: v.id("estudiantes"), // Referencia al ID del estudiante
    materiaId: v.id("materias"),       // Referencia al ID de la materia
    nota: v.number(),                  // La calificación (valor numérico)
    semestre: v.string(),              // Semestre (ej: "2025-1")
  }),
});