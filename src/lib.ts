export class SampleClass {
	public publicProperty: string;
	protected protectedProperty: string;

	constructor(pub: string, prot: string) {
		this.publicProperty = pub;
		this.protectedProperty = prot;
	}
}

export const sampleInstance = new SampleClass("I'm public", "I'm protected");