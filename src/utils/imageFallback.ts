export function getRandomUnsplashImage(): string {
  const imageIds = [
    '1544551763-46a013bb70d5',
    '1504307651254-35680f356dfd',
    '1559827260-dc66d52bef19',
    '1567899378494-47b22a2ae96a',
    '1566073771259-6a8506099945',
    '1544551763-46a013bb70d5',
    '1504307651254-35680f356dfd',
  ];
  
  const randomId = imageIds[Math.floor(Math.random() * imageIds.length)];
  return `https://images.unsplash.com/photo-${randomId}?w=1200&h=800&fit=crop&auto=format`;
}

