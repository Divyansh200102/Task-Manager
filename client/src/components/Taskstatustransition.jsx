const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
        t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
        setCompletedTasks([...completedTasks, completedTask]);
    }
};

const upcomingTasks = tasks.filter((t) => !t.done);
