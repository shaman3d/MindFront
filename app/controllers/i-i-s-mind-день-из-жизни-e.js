import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-mind-день-из-жизни-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-mind-практикуемая-привычка+привычка':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'привычка',
            projection: 'ПривычкаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
