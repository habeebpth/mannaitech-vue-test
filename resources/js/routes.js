const TaskOne = () => import("./pages/TaskOne.vue");
const TaskTwo = () => import("./pages/TaskTwo.vue");
const TaskThree = () => import("./pages/TaskThree.vue");

const WelcomePage = () => import("./pages/Welcome.vue");

export const routes = [
    {
        name: "welcomePage",
        path: "/",
        component: WelcomePage,
    },
    {
        name: "taskOne",
        path: "/taskOne",
        component: TaskOne,
    },
    {
        name: "taskTwo",
        path: "/taskTwo",
        component: TaskTwo,
    },
    {
        name: "taskThree",
        path: "/taskThree",
        component: TaskThree,
    },
];
