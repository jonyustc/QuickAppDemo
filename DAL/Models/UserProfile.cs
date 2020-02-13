namespace DAL.Models
{
    public class UserProfile : AuditableEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

    }
}