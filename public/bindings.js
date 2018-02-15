import ko from 'knockout';
import $ from 'jquery';

ko.bindingHandlers.rank = {
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var prefix = valueAccessor() || "";
    var oneBasedIndex = prefix + (bindingContext.$index() + 1);
    $(element).text(oneBasedIndex);
  }
};

ko.bindingHandlers.striped = {
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var jElem = $(element);
    var clazz = bindingContext.$index() % 2 === 0 ? "even" : "odd";

    jElem.removeClass("odd");
    jElem.removeClass("even");
    jElem.addClass(clazz);
  }
};
