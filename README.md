# todoApp



This is my first app that was developed using  React-Native. The app is a ToDo app where users can keep track of all their private and work-related tasks.

Features:

1. It is possible to add new tasks and every task has a title, description, category( private or work ), and priority (low, medium, or high).
2. The app has a dashboard that allows the user to group tasks according to the task information. For example, one can choose to see work,  private tasks, or both of them together.  Additionally, the dashboard has an option that only shows the completed tasks.
3. One can edit or delete any task.
4. It is possible to sort any list in the app according to priorities or lexical order of the titles.
5. The app displays the percentage of the completed tasks in the dashboard.

Implementation:

1. Redux toolkit is used to manage the state of the app.
2. The app uses stack navigation to change between different pages.
3. The app has four different pages: (DashBoardPage, ExtendedItemPage, ListPage, and AddPage)
