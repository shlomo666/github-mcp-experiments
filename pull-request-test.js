// Pull Request Test File
// Created via GitHub MCP to test PR workflow

function greetMCP() {
    console.log('Hello from GitHub MCP experiment!');
    console.log('This file was created to test pull request functionality.');
    
    const features = [
        'Repository creation',
        'File management',
        'Issue tracking',
        'Pull request workflow',
        'Comment management',
        'Branch operations'
    ];
    
    console.log('MCP Features tested:');
    features.forEach((feature, index) => {
        console.log(`${index + 1}. ${feature}`);
    });
}

// Test function to demonstrate code changes in PR
function calculateExperimentStats() {
    const startTime = new Date();
    const experimentsCount = 5;
    const toolsTested = 12;
    
    return {
        startTime,
        experimentsCount,
        toolsTested,
        successRate: (experimentsCount / toolsTested * 100).toFixed(2) + '%'
    };
}

// Export functions for potential testing
module.exports = {
    greetMCP,
    calculateExperimentStats
};

greetMCP();
console.log('Experiment stats:', calculateExperimentStats());