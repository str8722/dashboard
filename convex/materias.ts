import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Consulta para obtener todas las materias
export const obtenerMaterias = query({
    handler: async (ctx) => {
        return await ctx.db.query("materias").collect();
    },
});

// Consulta para obtener una materia por ID
export const obtenerMateriasPorId = query({
    args: { id: v.id("materias") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

// Mutación para crear una nueva materia
export const crearMateria = mutation({
    args: {
        identificador: v.string(),
        nombreMateria: v.string(),
    },
    handler: async (ctx, args) => {
        const { identificador, nombreMateria } = args;
        return await ctx.db.insert("materias", {
            identificador,
            nombreMateria,
        });
    },
});

// Mutación para actualizar una materia existente
export const actualizarMateria = mutation({
    args: {
        id: v.id("materias"),
        identificador: v.string(),
        nombreMateria: v.string(),
    },
    handler: async (ctx, args) => {
        const { id, identificador, nombreMateria } = args;
        return await ctx.db.patch(id, {
            identificador,
            nombreMateria,
        });
    },
});

// Mutación para eliminar una materia
export const eliminarMateria = mutation({
    args: {
        id: v.id("materias"),
    },
    handler: async (ctx, args) => {
        return await ctx.db.delete(args.id);
    },
});