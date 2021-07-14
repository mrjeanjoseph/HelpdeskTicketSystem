﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceDesk;

namespace ServiceDesk.Migrations
{
    [DbContext(typeof(ServiceDeskDBContext))]
    partial class ServiceDeskDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ServiceDesk.BookMarked", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BookMarkedBy")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("TicketId")
                        .HasColumnType("int")
                        .HasColumnName("TicketID");

                    b.HasKey("Id");

                    b.HasIndex("TicketId");

                    b.ToTable("BookMarked");
                });

            modelBuilder.Entity("ServiceDesk.Resolution", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("ID");

                    b.Property<string>("ClosedBy")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Resolution1")
                        .HasColumnType("text")
                        .HasColumnName("Resolution");

                    b.Property<string>("TicketName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Resolution");
                });

            modelBuilder.Entity("ServiceDesk.Ticket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Issue")
                        .HasColumnType("text");

                    b.Property<string>("OpenedBy")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool?>("Status")
                        .HasColumnType("bit");

                    b.Property<string>("TicketName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("ServiceDesk.BookMarked", b =>
                {
                    b.HasOne("ServiceDesk.Ticket", "Ticket")
                        .WithMany("BookMarkeds")
                        .HasForeignKey("TicketId")
                        .HasConstraintName("FK__BookMarke__Ticke__49C3F6B7");

                    b.Navigation("Ticket");
                });

            modelBuilder.Entity("ServiceDesk.Resolution", b =>
                {
                    b.HasOne("ServiceDesk.Ticket", "IdNavigation")
                        .WithOne("Resolution")
                        .HasForeignKey("ServiceDesk.Resolution", "Id")
                        .HasConstraintName("FK__Resolution__ID__3C69FB99")
                        .IsRequired();

                    b.Navigation("IdNavigation");
                });

            modelBuilder.Entity("ServiceDesk.Ticket", b =>
                {
                    b.Navigation("BookMarkeds");

                    b.Navigation("Resolution");
                });
#pragma warning restore 612, 618
        }
    }
}
