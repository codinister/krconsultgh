'use client'

import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'


const config = process.env.NEXT_PUBLIC_SANITY_CLIENT || '';

const clientConfig = defineConfig({
    projectId: config, 
    dataset: 'production', 
    title: 'KRConsult', 
    apiVersion: '2025-10-07',
    basePath: '/admindashboard',
    schema: {
        types: schemaTypes
    },
    plugins: [structureTool(),visionTool()]

})

export default clientConfig
































