// convex/schema.ts
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
    materiaId: v.id("materias"), // Referencia al ID de la materia
    nota: v.number(), // La calificación (valor numérico)
    semestre: v.string(), // Semestre (ej: "2025-1")
  }),
  // --- Tabla de usuarios ---
  usuarios: defineTable({
    clerkId: v.string(), // ID de usuario de Clerk
    nombre: v.string(),
    correo: v.string(),
    estado: v.union(v.literal("activo"), v.literal("bloqueado")), // Estado del usuario
    fechaCreacion: v.number(), // Timestamp de creación
    rol: v.string(), // Nuevo campo para el rol del usuario (ej: "admin", "user", etc.)
  })
    .index("by_clerkId", ["clerkId"]) // Índice para buscar por Clerk ID
    .index("by_correo", ["correo"]), // Índice para asegurar unicidad y buscar por correo
});