module.exports = {
  name: `plugin-remove-workspaces-field`,
  factory: () => ({
    hooks: {
      beforeWorkspacePacking(_, rawManifest) {
        delete rawManifest.workspaces;
      },
    },
  }),
};
