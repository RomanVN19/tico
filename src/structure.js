import Fields from 'katejs/lib/fields';

const Project = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const Task = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'project',
      type: Fields.REFERENCE,
      entity: 'Project',
    },
  ],
  tables: [
    {
      name: 'worklog',
      fields: [
        {
          name: 'title',
          type: Fields.STRING,
        },
        {
          name: 'started',
          type: Fields.DATE,
        },
        {
          name: 'ended',
          type: Fields.DATE,
        },
      ],
    },
  ],
};

export const title = 'TiCo';
export const packageName = 'tico_app';
export const structures = {
  Project,
  Task,
};
