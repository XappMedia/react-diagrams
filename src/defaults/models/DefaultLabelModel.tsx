import { LabelModel } from "../../models/LabelModel";
import merge from "lodash/merge";
import { DiagramEngine } from "../../DiagramEngine";

export class DefaultLabelModel extends LabelModel {
	label: string;

	constructor() {
		super("default");
		this.offsetY = -23;
	}

	setLabel(label: string) {
		this.label = label;
	}

	deSerialize(ob, engine: DiagramEngine) {
		super.deSerialize(ob, engine);
		this.label = ob.label;
	}

	serialize() {
		return merge(super.serialize(), {
			label: this.label
		});
	}
}
