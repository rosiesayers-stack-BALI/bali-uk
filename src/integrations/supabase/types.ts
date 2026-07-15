export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      benefits: {
        Row: {
          allowed_member_types: string[] | null
          body: string | null
          category: string | null
          created_at: string
          id: string
          published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          allowed_member_types?: string[] | null
          body?: string | null
          category?: string | null
          created_at?: string
          id?: string
          published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          allowed_member_types?: string[] | null
          body?: string | null
          category?: string | null
          created_at?: string
          id?: string
          published?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      conference_interest: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          member: boolean
          name: string
          notes: string | null
          role: string | null
          sponsor_interest: boolean
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          member?: boolean
          name: string
          notes?: string | null
          role?: string | null
          sponsor_interest?: boolean
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          member?: boolean
          name?: string
          notes?: string | null
          role?: string | null
          sponsor_interest?: boolean
        }
        Relationships: []
      }
      directory_accreditations: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          profile_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          profile_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          profile_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directory_accreditations_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "directory_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      directory_profiles: {
        Row: {
          about: string | null
          banner_url: string | null
          created_at: string
          id: string
          logo_url: string | null
          slug: string
          socials: Json
          updated_at: string
          wb_org_id: string
          website_url: string | null
          whos_who: string | null
        }
        Insert: {
          about?: string | null
          banner_url?: string | null
          created_at?: string
          id?: string
          logo_url?: string | null
          slug: string
          socials?: Json
          updated_at?: string
          wb_org_id: string
          website_url?: string | null
          whos_who?: string | null
        }
        Update: {
          about?: string | null
          banner_url?: string | null
          created_at?: string
          id?: string
          logo_url?: string | null
          slug?: string
          socials?: Json
          updated_at?: string
          wb_org_id?: string
          website_url?: string | null
          whos_who?: string | null
        }
        Relationships: []
      }
      directory_projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          images: Json | null
          profile_id: string
          sort_order: number | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          profile_id: string
          sort_order?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          profile_id?: string
          sort_order?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "directory_projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "directory_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      directory_team: {
        Row: {
          created_at: string
          id: string
          name: string
          photo_url: string | null
          profile_id: string
          role: string | null
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          photo_url?: string | null
          profile_id: string
          role?: string | null
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          photo_url?: string | null
          profile_id?: string
          role?: string | null
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directory_team_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "directory_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      directory_testimonials: {
        Row: {
          author: string | null
          created_at: string
          id: string
          images: Json | null
          profile_id: string
          quote: string
          sort_order: number | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: string
          images?: Json | null
          profile_id: string
          quote: string
          sort_order?: number | null
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: string
          images?: Json | null
          profile_id?: string
          quote?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directory_testimonials_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "directory_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          allowed_member_types: string[] | null
          category: string | null
          created_at: string
          description: string | null
          file_path: string
          id: string
          public: boolean | null
          published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          allowed_member_types?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          file_path: string
          id?: string
          public?: boolean | null
          published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          allowed_member_types?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          file_path?: string
          id?: string
          public?: boolean | null
          published?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          body_paragraphs: string[]
          booking_url: string | null
          category: string
          created_at: string
          date_text: string
          description: string
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
          venue: string
        }
        Insert: {
          body_paragraphs?: string[]
          booking_url?: string | null
          category?: string
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
          venue?: string
        }
        Update: {
          body_paragraphs?: string[]
          booking_url?: string | null
          category?: string
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
          venue?: string
        }
        Relationships: []
      }
      liss_applications: {
        Row: {
          application_type: string
          card_name: string
          card_slug: string
          category_slug: string
          citb_completed_on: string | null
          consent_marketing: boolean
          consent_terms: boolean
          created_at: string
          date_of_birth: string | null
          email: string
          employer_address: string | null
          employer_name: string | null
          full_name: string
          home_address: string
          id: string
          ip_address: string | null
          job_title: string | null
          notes: string | null
          phone: string | null
          qualification_summary: string | null
          rolo_completed_on: string | null
          status: string
          updated_at: string
          uploaded_files: Json
        }
        Insert: {
          application_type: string
          card_name: string
          card_slug: string
          category_slug: string
          citb_completed_on?: string | null
          consent_marketing?: boolean
          consent_terms: boolean
          created_at?: string
          date_of_birth?: string | null
          email: string
          employer_address?: string | null
          employer_name?: string | null
          full_name: string
          home_address: string
          id?: string
          ip_address?: string | null
          job_title?: string | null
          notes?: string | null
          phone?: string | null
          qualification_summary?: string | null
          rolo_completed_on?: string | null
          status?: string
          updated_at?: string
          uploaded_files?: Json
        }
        Update: {
          application_type?: string
          card_name?: string
          card_slug?: string
          category_slug?: string
          citb_completed_on?: string | null
          consent_marketing?: boolean
          consent_terms?: boolean
          created_at?: string
          date_of_birth?: string | null
          email?: string
          employer_address?: string | null
          employer_name?: string | null
          full_name?: string
          home_address?: string
          id?: string
          ip_address?: string | null
          job_title?: string | null
          notes?: string | null
          phone?: string | null
          qualification_summary?: string | null
          rolo_completed_on?: string | null
          status?: string
          updated_at?: string
          uploaded_files?: Json
        }
        Relationships: []
      }
      mailing_lists: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          filter: Json
          id: string
          member_count: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          filter?: Json
          id?: string
          member_count?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          filter?: Json
          id?: string
          member_count?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      member_links: {
        Row: {
          created_at: string
          member_category: string | null
          updated_at: string
          user_id: string
          wb_org_id: string | null
          wb_person_id: string | null
        }
        Insert: {
          created_at?: string
          member_category?: string | null
          updated_at?: string
          user_id: string
          wb_org_id?: string | null
          wb_person_id?: string | null
        }
        Update: {
          created_at?: string
          member_category?: string | null
          updated_at?: string
          user_id?: string
          wb_org_id?: string | null
          wb_person_id?: string | null
        }
        Relationships: []
      }
      member_submissions: {
        Row: {
          created_at: string
          id: string
          kind: string
          payload: Json
          published_id: string | null
          reviewer_notes: string | null
          status: string
          submitted_by: string | null
          title: string
          updated_at: string
          wb_org_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          kind: string
          payload: Json
          published_id?: string | null
          reviewer_notes?: string | null
          status?: string
          submitted_by?: string | null
          title: string
          updated_at?: string
          wb_org_id: string
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          payload?: Json
          published_id?: string | null
          reviewer_notes?: string | null
          status?: string
          submitted_by?: string | null
          title?: string
          updated_at?: string
          wb_org_id?: string
        }
        Relationships: []
      }
      membership_applications: {
        Row: {
          applicant_email: string
          applicant_name: string | null
          applicant_user_id: string | null
          application_link: string | null
          category: string
          company_name: string | null
          created_at: string
          docs: Json
          fee_status: string
          file_uploads: Json | null
          history: Json
          id: string
          notes: string | null
          notes_log: Json
          onboarding_link: string | null
          onboarding_status: string
          payload: Json
          payment_method: string
          pushed_at: string | null
          refs: Json
          source: string
          status: string
          updated_at: string
          wb_org_id: string | null
          workbooks_lead_id: string | null
        }
        Insert: {
          applicant_email: string
          applicant_name?: string | null
          applicant_user_id?: string | null
          application_link?: string | null
          category: string
          company_name?: string | null
          created_at?: string
          docs?: Json
          fee_status?: string
          file_uploads?: Json | null
          history?: Json
          id?: string
          notes?: string | null
          notes_log?: Json
          onboarding_link?: string | null
          onboarding_status?: string
          payload: Json
          payment_method?: string
          pushed_at?: string | null
          refs?: Json
          source?: string
          status?: string
          updated_at?: string
          wb_org_id?: string | null
          workbooks_lead_id?: string | null
        }
        Update: {
          applicant_email?: string
          applicant_name?: string | null
          applicant_user_id?: string | null
          application_link?: string | null
          category?: string
          company_name?: string | null
          created_at?: string
          docs?: Json
          fee_status?: string
          file_uploads?: Json | null
          history?: Json
          id?: string
          notes?: string | null
          notes_log?: Json
          onboarding_link?: string | null
          onboarding_status?: string
          payload?: Json
          payment_method?: string
          pushed_at?: string | null
          refs?: Json
          source?: string
          status?: string
          updated_at?: string
          wb_org_id?: string | null
          workbooks_lead_id?: string | null
        }
        Relationships: []
      }
      membership_categories: {
        Row: {
          created_at: string
          description: string | null
          fees: Json
          id: string
          label: string
          sort_order: number
          tier: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          fees?: Json
          id: string
          label: string
          sort_order?: number
          tier: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          fees?: Json
          id?: string
          label?: string
          sort_order?: number
          tier?: string
          updated_at?: string
        }
        Relationships: []
      }
      membership_enquiries: {
        Row: {
          category_interest: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          source: string | null
          status: string
        }
        Insert: {
          category_interest?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          source?: string | null
          status?: string
        }
        Update: {
          category_interest?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          source?: string | null
          status?: string
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          body_paragraphs: string[]
          created_at: string
          date_text: string
          description: string
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          kind: string
          link: string | null
          read_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          kind: string
          link?: string | null
          read_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          kind?: string
          link?: string | null
          read_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      policy_posts: {
        Row: {
          author: string
          body_paragraphs: string[]
          created_at: string
          date_text: string
          description: string
          external_links: Json
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          pullquote_attribution: string | null
          pullquote_text: string | null
          read_minutes: number
          slug: string
          source_url: string | null
          themes: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          external_links?: Json
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          pullquote_attribution?: string | null
          pullquote_text?: string | null
          read_minutes?: number
          slug: string
          source_url?: string | null
          themes?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          external_links?: Json
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          pullquote_attribution?: string | null
          pullquote_text?: string | null
          read_minutes?: number
          slug?: string
          source_url?: string | null
          themes?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profile_stats_events: {
        Row: {
          event_type: string
          id: string
          meta: Json | null
          occurred_at: string
          wb_org_id: string
        }
        Insert: {
          event_type: string
          id?: string
          meta?: Json | null
          occurred_at?: string
          wb_org_id: string
        }
        Update: {
          event_type?: string
          id?: string
          meta?: Json | null
          occurred_at?: string
          wb_org_id?: string
        }
        Relationships: []
      }
      training_courses: {
        Row: {
          booking_url: string | null
          category: string | null
          contact_email: string | null
          cost: string | null
          created_at: string
          date_text: string
          description: string
          duration: string | null
          format: string | null
          id: string
          image_url: string | null
          iso_date: string | null
          location: string | null
          profile_id: string | null
          published: boolean
          reviewer_notes: string | null
          sort_order: number
          source_url: string | null
          status: string
          submitted_by: string | null
          title: string
          updated_at: string
          venue: string
        }
        Insert: {
          booking_url?: string | null
          category?: string | null
          contact_email?: string | null
          cost?: string | null
          created_at?: string
          date_text?: string
          description?: string
          duration?: string | null
          format?: string | null
          id?: string
          image_url?: string | null
          iso_date?: string | null
          location?: string | null
          profile_id?: string | null
          published?: boolean
          reviewer_notes?: string | null
          sort_order?: number
          source_url?: string | null
          status?: string
          submitted_by?: string | null
          title: string
          updated_at?: string
          venue?: string
        }
        Update: {
          booking_url?: string | null
          category?: string | null
          contact_email?: string | null
          cost?: string | null
          created_at?: string
          date_text?: string
          description?: string
          duration?: string | null
          format?: string | null
          id?: string
          image_url?: string | null
          iso_date?: string | null
          location?: string | null
          profile_id?: string | null
          published?: boolean
          reviewer_notes?: string | null
          sort_order?: number
          source_url?: string | null
          status?: string
          submitted_by?: string | null
          title?: string
          updated_at?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "training_courses_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "directory_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      workbooks_bookings: {
        Row: {
          amount: number | null
          attendee_email: string | null
          attendee_name: string | null
          created_at: string
          event_id: string | null
          event_slug: string | null
          id: string
          notes: string | null
          paid_at: string | null
          payment_provider: string | null
          payment_ref: string | null
          raw: Json | null
          status: string
          synced_at: string | null
          updated_at: string
          wb_id: string | null
          wb_org_id: string | null
          wb_person_id: string | null
        }
        Insert: {
          amount?: number | null
          attendee_email?: string | null
          attendee_name?: string | null
          created_at?: string
          event_id?: string | null
          event_slug?: string | null
          id?: string
          notes?: string | null
          paid_at?: string | null
          payment_provider?: string | null
          payment_ref?: string | null
          raw?: Json | null
          status?: string
          synced_at?: string | null
          updated_at?: string
          wb_id?: string | null
          wb_org_id?: string | null
          wb_person_id?: string | null
        }
        Update: {
          amount?: number | null
          attendee_email?: string | null
          attendee_name?: string | null
          created_at?: string
          event_id?: string | null
          event_slug?: string | null
          id?: string
          notes?: string | null
          paid_at?: string | null
          payment_provider?: string | null
          payment_ref?: string | null
          raw?: Json | null
          status?: string
          synced_at?: string | null
          updated_at?: string
          wb_id?: string | null
          wb_org_id?: string | null
          wb_person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workbooks_bookings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      workbooks_invoices: {
        Row: {
          amount: number | null
          created_at: string
          id: string
          issued_at: string | null
          raw: Json | null
          reference: string | null
          smartcard_ref: string | null
          status: string | null
          synced_at: string
          wb_id: string
          wb_org_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: string
          issued_at?: string | null
          raw?: Json | null
          reference?: string | null
          smartcard_ref?: string | null
          status?: string | null
          synced_at?: string
          wb_id: string
          wb_org_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: string
          issued_at?: string | null
          raw?: Json | null
          reference?: string | null
          smartcard_ref?: string | null
          status?: string | null
          synced_at?: string
          wb_id?: string
          wb_org_id?: string | null
        }
        Relationships: []
      }
      workbooks_opportunities: {
        Row: {
          amount: number | null
          created_at: string
          id: string
          raw: Json | null
          stage: string | null
          synced_at: string
          title: string | null
          wb_id: string
          wb_org_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: string
          raw?: Json | null
          stage?: string | null
          synced_at?: string
          title?: string | null
          wb_id: string
          wb_org_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: string
          raw?: Json | null
          stage?: string | null
          synced_at?: string
          title?: string | null
          wb_id?: string
          wb_org_id?: string | null
        }
        Relationships: []
      }
      workbooks_orgs: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          banner_url: string | null
          category: string | null
          country: string | null
          county: string | null
          created_at: string
          description: string | null
          disciplines: Json | null
          exclude_from_promotion: boolean | null
          id: string
          logo_url: string | null
          membership_expires_at: string | null
          name: string
          next_qsr_due: string | null
          phone: string | null
          postcode: string | null
          public_email: string | null
          raw: Json | null
          reg_number: string | null
          region: string | null
          socials: Json
          status: string | null
          synced_at: string
          town: string | null
          updated_at: string
          vat_number: string | null
          wb_id: string
          website: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          banner_url?: string | null
          category?: string | null
          country?: string | null
          county?: string | null
          created_at?: string
          description?: string | null
          disciplines?: Json | null
          exclude_from_promotion?: boolean | null
          id?: string
          logo_url?: string | null
          membership_expires_at?: string | null
          name: string
          next_qsr_due?: string | null
          phone?: string | null
          postcode?: string | null
          public_email?: string | null
          raw?: Json | null
          reg_number?: string | null
          region?: string | null
          socials?: Json
          status?: string | null
          synced_at?: string
          town?: string | null
          updated_at?: string
          vat_number?: string | null
          wb_id: string
          website?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          banner_url?: string | null
          category?: string | null
          country?: string | null
          county?: string | null
          created_at?: string
          description?: string | null
          disciplines?: Json | null
          exclude_from_promotion?: boolean | null
          id?: string
          logo_url?: string | null
          membership_expires_at?: string | null
          name?: string
          next_qsr_due?: string | null
          phone?: string | null
          postcode?: string | null
          public_email?: string | null
          raw?: Json | null
          reg_number?: string | null
          region?: string | null
          socials?: Json
          status?: string | null
          synced_at?: string
          town?: string | null
          updated_at?: string
          vat_number?: string | null
          wb_id?: string
          website?: string | null
        }
        Relationships: []
      }
      workbooks_people: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          contact_role: string
          country: string | null
          county: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          is_main_contact: boolean | null
          job_title: string | null
          last_name: string | null
          login_email: string | null
          mobile: string | null
          name: string | null
          newsletter_opts: Json
          phone: string | null
          postcode: string | null
          raw: Json | null
          synced_at: string
          title: string | null
          town: string | null
          updated_at: string
          wb_id: string
          wb_org_id: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          contact_role?: string
          country?: string | null
          county?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          is_main_contact?: boolean | null
          job_title?: string | null
          last_name?: string | null
          login_email?: string | null
          mobile?: string | null
          name?: string | null
          newsletter_opts?: Json
          phone?: string | null
          postcode?: string | null
          raw?: Json | null
          synced_at?: string
          title?: string | null
          town?: string | null
          updated_at?: string
          wb_id: string
          wb_org_id?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          contact_role?: string
          country?: string | null
          county?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          is_main_contact?: boolean | null
          job_title?: string | null
          last_name?: string | null
          login_email?: string | null
          mobile?: string | null
          name?: string | null
          newsletter_opts?: Json
          phone?: string | null
          postcode?: string | null
          raw?: Json | null
          synced_at?: string
          title?: string | null
          town?: string | null
          updated_at?: string
          wb_id?: string
          wb_org_id?: string | null
        }
        Relationships: []
      }
      workbooks_sync_runs: {
        Row: {
          error_message: string | null
          finished_at: string | null
          id: string
          pulled: Json | null
          pushed: Json | null
          started_at: string
          status: string
        }
        Insert: {
          error_message?: string | null
          finished_at?: string | null
          id?: string
          pulled?: Json | null
          pushed?: Json | null
          started_at?: string
          status?: string
        }
        Update: {
          error_message?: string | null
          finished_at?: string | null
          id?: string
          pulled?: Json | null
          pushed?: Json | null
          started_at?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      claim_first_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
