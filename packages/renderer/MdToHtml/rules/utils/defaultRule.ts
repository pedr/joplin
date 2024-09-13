import MarkdownIt = require('markdown-it');

const defaultRule = (markdownIt: MarkdownIt, key: keyof MarkdownIt.Renderer.RenderRuleRecord): MarkdownIt.Renderer.RenderRule => {
	if (markdownIt.renderer.rules[key]) return markdownIt.renderer.rules[key];
	return (tokens, idx, options, _env, renderer) => renderer.renderToken(tokens, idx, options);
};

export default defaultRule;
