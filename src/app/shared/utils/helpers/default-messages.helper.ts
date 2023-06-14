export class DefaultMessagesHelper {
	static notFound(property: string) {
		const message = `Não foi possível encontrar um valor para a propriedade '${property}'.`;

		return message;
	}

	static duplicatedProperty(property: string, value: string) {
		const message = `Já existe um registro com o valor '${value}' na propriedade '${property}', o qual deve ser único.`;

		return message;
	}
}