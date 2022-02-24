/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateProjectInput from '../entity/inputs/CreateProjectInput';
import Project from '../entity/entities/Project';
import ProjectModel from '../models/ProjectModel';

@Resolver(Project)
class ProjectResolver {
    @Query(() => [Project])
    async allProjects() {
        const projects = await ProjectModel.find();
        return projects;
    }

    @Mutation(() => Project)
    async createProject(@Arg('input') createProjectInput: CreateProjectInput) {
      try {
        const newProject = new ProjectModel(createProjectInput);
        await newProject.save();
        console.log('newProject', newProject);
        return newProject;
      } catch (err) {
        return console.log(err);
      }
    }
}

export default ProjectResolver;
