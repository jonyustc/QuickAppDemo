using System;

namespace DAL.Models
{
    public class AuditableEntity
    {
        public AuditableEntity()
        {
            CreatedDate=DateTime.Now;
        }

        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}