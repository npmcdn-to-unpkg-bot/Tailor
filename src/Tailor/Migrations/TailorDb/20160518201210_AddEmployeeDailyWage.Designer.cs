using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Tailor.DAL;

namespace Tailor.Migrations.TailorDb
{
    [DbContext(typeof(TailorDbContext))]
    [Migration("20160518201210_AddEmployeeDailyWage")]
    partial class AddEmployeeDailyWage
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tailor.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardNo")
                        .IsRequired();

                    b.Property<decimal>("DailyWage");

                    b.Property<string>("FirstName");

                    b.Property<decimal>("HourPerDay");

                    b.Property<decimal>("HourRate");

                    b.Property<string>("LastName");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("Tailor.Models.EmployeeTimeSheet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<int?>("EmployeeId")
                        .IsRequired();

                    b.Property<decimal>("HourRate");

                    b.Property<decimal>("Hours");

                    b.Property<decimal>("Wage");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("Tailor.Models.EmployeeTimeSheet", b =>
                {
                    b.HasOne("Tailor.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");
                });
        }
    }
}
