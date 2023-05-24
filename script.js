/* The below will be how I link the fullpage downloaded files to the project to initialise them. In the onLeave part of the below is where we will apply all the animations as we scroll. The greatpart of this project is that this is my first prject using GitHub Copilot which pretty much added all the code to action my animation so all I need to do is finetune my scroll animation */
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    /* The below onwards is where copilot just took over and added all code  */
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay: 0.5 });

        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });

        if (destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            tl.fromTo(chairs, 0.7, { x: '100%' }, { x: '-35%' })
                .fromTo(description, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 0 })
                .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(chairs[1], 0, { opacity: 1 }, { opacity: 0 })
                .fromTo(chairs[2], 3, { opacity: 0 }, { opacity: 1 });
        }
    }
})