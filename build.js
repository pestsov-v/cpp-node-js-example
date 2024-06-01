const { execSync } = require('child_process');

try {
    execSync('node-gyp rebuild', { stdio: 'inherit' });
    console.log('Build successful');
} catch (err) {
    console.error('Build failed:', err);
}
