export const build = (numberOfBricks) => {

    let count = 1;
    const interval = setInterval(() => {
        
        const brick = document.createElement('div');
        brick.setAttribute('id', `brick-${count}`);
        
      
        if (count % 3 ===2) { 
            brick.dataset.foundation = true;
           
        }
        
       
        document.body.appendChild(brick);
        
       
        if (count >= numberOfBricks) {
            clearInterval(interval);
        }
        count++;
    }, 100);
};

export const repair = (...ids) => { // 1,3,4,4,5,65,6,
    ids.forEach(id => { // [1,3,4,4,5,65,6,]
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.hasAttribute('data-foundation')) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
};

export const destroy = () => {
    const bricks = document.querySelectorAll('div');
    if (bricks.length > 0) {
        bricks[bricks.length - 1].remove();
    }
};