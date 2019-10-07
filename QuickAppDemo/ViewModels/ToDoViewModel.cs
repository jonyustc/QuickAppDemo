namespace QuickAppDemo.ViewModels
{
    public class ToDoViewModel
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public string Description { get; set; }
        public bool IsImportant { get; set; }
        public bool? IsCompleted { get; set; }
    }
}